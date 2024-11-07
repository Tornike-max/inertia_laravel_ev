<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TowTruckResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public static $wrap = false;

    public function toArray(Request $request): array
    {
        return [
            'driver_name' => $this->driver_name,
            'truck_number' => $this->truck_number,
            'availability_status' => $this->availability_status,
            'location' => $this->location,
            'driver_phone' => $this->driver_phone,
            'image' => $this->image,
            'user' => new UserResource($this->whenLoaded('user')),
            'price' => $this->price,
            'latutude' => $this->latitude,
            'longitude' => $this->longitude,
            'last_updated' => $this->last_updated
        ];
    }
}
