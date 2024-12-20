<?php

namespace App\Events;

use Illuminate\Broadcasting\PublicChannel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class LocationUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $latitude;
    public $longitude;
    public $towTruckId;

    public function __construct($latitude, $longitude, $towTruckId)
    {
        $this->latitude = $latitude;
        $this->longitude = $longitude;
        $this->towTruckId = $towTruckId;
    }

    public function broadcastOn()
    {
        return new PublicChannel('tow-truck-location');
    }
}
