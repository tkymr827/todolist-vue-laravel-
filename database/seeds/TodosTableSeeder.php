<?php

use Illuminate\Database\Seeder;

class TodosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('todos')->insert([
            ['memo' => 'aaaa', 'status' => 0],
            ['memo' => 'bbbb', 'status' => 0],
            ['memo' => 'cccc', 'status' => 0]
        ]);
    }
}
