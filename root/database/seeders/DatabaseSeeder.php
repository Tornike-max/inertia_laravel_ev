<?php

namespace Database\Seeders;

use App\Models\About;
use App\Models\Evacuator;
use App\Models\FeedBack;
use App\Models\Order;
use App\Models\Question;
use App\Models\Service;
use App\Models\TowTruck;
use App\Models\User;
use App\Models\Vehicle;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory(20)->create();

        // Vehicle::factory(10)->create();

        // Order::factory(1)->create([
        //     'user_id' => User::factory(),
        //     'vehicle_id' => Vehicle::factory(),
        //     'tow_truck_id' => TowTruck::factory(),
        //     'order_details' => 'მინდა რაც შეიძლება მალე მოხვიდეთ და აუცილებელია თან იქონიოთ ხურდა, რადგან ზუსტად არ მაქვს თანხა.',
        //     'pickup_location' => 'Tbilisi,Niko muskhelishvili street-2',
        //     'dropoff_location' => 'Batumi,Rustaveli street-5',
        //     'status' => 'completed',
        //     'order_date' => fake()->date(),
        //     'completion_date' => fake()->date(),
        //     'price' => '500',
        // ]);

        // $feedbackArr = [
        //     [
        //         'author_id' => User::factory(),
        //         'content' => "საუკეთესო სერვისი. სწრაფად მოვიდნენ და პროფესიონალურად შეასრულეს სამუშაო."
        //     ],
        //     [
        //         'author_id' => User::factory(),
        //         'content' => "ძალიან კმაყოფილი ვარ სერვისით. აუცილებლად ვურჩევ ყველას."
        //     ],
        //     [
        //         'author_id' => User::factory(),
        //         'content' => "არ ვარგა, ამ გაახსირებულებმა გადამაგდეს🤬"
        //     ]
        // ];

        // foreach ($feedbackArr as $feedback) {
        //     FeedBack::factory()->create($feedback);
        // }

        // $table->string('title');
        // $table->tinyText('ourMission');
        // $table->tinyText('whyUs');
        // $table->tinyText('ourHistory');
        // About::factory()->create([
        //     'title' => 'ჩვენს შესახებ',
        //     'ourMission' => 'ჩვენი კომპანია ეწევა სატრანსპორტო სერვისების მიწოდებას, რომელიც უზრუნველყოფს მომხმარებელს სწრაფი და საიმედო მომსახურებით. ჩვენი მიზანია, თითოეული კლიენტის საჭიროებები გავამართლოთ და შევქმნათ უნიკალური გამოცდილება.',
        //     'whyUs' => 'ჩვენი კომპანია გთავაზობთ გამოცდილი პროფესიონალების გუნდს, რომელიც ყოველთვის მზად არის უზრუნველყოს მომხმარებელზე ორიენტირებული სერვისები. ჩვენი მიზანია მაღალი ხარისხის და უსაფრთხო მომსახურების მიწოდება. ჩვენ გთავაზობთ 24/7 მხარდაჭერას, რათა თქვენი საჭიროებები ყოველთვის იყოს დაკმაყოფილებული.',
        //     'ourHistory' => 'ჩვენი კომპანია დაარსდა გუშინ, და დღემდე გრძელდება მუდმივი განვითარება. ჩვენ ვცდილობთ, რომ გავაუმჯობესოთ ჩვენი მომსახურება და დავნერგოთ სიახლეები ბაზარზე.'
        // ]);

        // $questions = [
        //     [
        //         'user_id' => 1,
        //         'question' => 'როგორ დავჯავშნო ევაკუატორი?',
        //         'answer' => 'აპლიკაციაში აირჩიე ლოკაცია და დააჭირე "დაჯავშნა" ღილაკს.',
        //         'category' => 'services'
        //     ],
        //     [
        //         'user_id' => 2,
        //         'question' => 'რა ღირს ევაკუატორის მომსახურება?',
        //         'answer' => 'მომსახურების ფასი დამოკიდებულია მანძილზე და დროის სეგმენტზე.',
        //         'category' => 'prices'
        //     ],
        //     [
        //         'user_id' => 2,
        //         'question' => 'როგორ გადავიხადო?',
        //         'answer' => 'გადახდის მეთოდებში შედის ბარათით და ნაღდი ანგარიშსწორება.',
        //         'category' => 'payments'
        //     ],
        //     [
        //         'user_id' => 3,
        //         'question' => 'ტექნიკური დახმარება როგორ მივიღო?',
        //         'answer' => 'პრობლემის შემთხვევაში დაუკავშირდით ტექნიკური დახმარების გუნდს.',
        //         'category' => 'techs'
        //     ],
        //     [
        //         'user_id' => 1,
        //         'question' => 'რამდენი ხანი სჭირდება ევაკუატორს მოსვლას?',
        //         'answer' => 'საშუალოდ 30-60 წუთი, დამოკიდებულია ლოკაციაზე და საგზაო მდგომარეობაზე.',
        //         'category' => 'services'
        //     ],
        //     [
        //         'user_id' => 5,
        //         'question' => 'შესაძლებელია თუ არა ბარათით გადახდა?',
        //         'answer' => 'დიახ, ჩვენ ვიღებთ ბარათით გადახდებს აპლიკაციის მეშვეობით.',
        //         'category' => 'payments'
        //     ],
        //     [
        //         'user_id' => 3,
        //         'question' => 'გაქვთ თუ არა ფასდაკლებები?',
        //         'answer' => 'დიახ, რეგულარულ მომხმარებლებს ვთავაზობთ ფასდაკლებებს და სპეციალურ შეთავაზებებს.',
        //         'category' => 'prices'
        //     ],
        //     [
        //         'user_id' => 8,
        //         'question' => 'რა ვქნა, თუ მანქანა დაზიანდა ევაკუაციის დროს?',
        //         'answer' => 'ჩვენი სერვისი უზრუნველყოფს სრული დაზღვევის პოლიტიკას, ასე რომ ნებისმიერი დაზიანება აგვინაზღაურდება.',
        //         'category' => 'security'
        //     ],
        //     [
        //         'user_id' => 7,
        //         'question' => 'შეუძლია თუ არა ევაკუატორს რამდენიმე მანქანის გადაყვანა ერთდროულად?',
        //         'answer' => 'ზოგიერთ ჩვენს ევაკუატორს შეუძლია რამდენიმე მანქანის გადაყვანა, მაგრამ უმეტესობა ერთ მანქანაზეა გათვლილი.',
        //         'category' => 'services'
        //     ],
        //     [
        //         'user_id' => 2,
        //         'question' => 'მუშაობთ თუ არა 24/7 რეჟიმში?',
        //         'answer' => 'დიახ, ჩვენი სერვისი ხელმისაწვდომია 24/7 და ყოველთვის მზადაა დასახმარებლად.',
        //         'category' => 'services'
        //     ]
        // ];

        TowTruck::factory(10)->create();
    }
}
