<x-mail::message>
    # ახალი შეტყობინება თქვენთვის!

    თქვენ მიიღეთ ახალი შეტყობინება, დეტალები იხილეთ ქვემოთ:

    <div>
        <p><strong>სახელი:</strong> {{ $data['name'] }}</p>
        <p><strong>ელ. ფოსტა:</strong> {{ $data['email'] }}</p>
        <p><strong>შეტყობინება:</strong> {{ $data['message'] }}</p>
    </div>

    <x-mail::button :url="'https://example.com/respond'" color="primary">
        პასუხი
    </x-mail::button>

    <p>მადლობა,<br>
        {{ config('app.name') }}</p>
</x-mail::message>