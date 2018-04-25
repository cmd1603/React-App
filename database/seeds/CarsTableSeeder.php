<?php
use App\Car;
use Illuminate\Database\Seeder;

class CarsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
 
        // Create 50 product records
        for ($i = 0; $i < 10; $i++) {
            Car::create([
                'make' => $faker->word,
                'model' => $faker->word,
                'description' => $faker->paragraph,
                'price' => $faker->randomNumber(5),
                'availability' => $faker->boolean(50)
            ]);
        }
    }
}
