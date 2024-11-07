<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'user' => new UserResource($this->whenLoaded('user')),
            'towTruck' => new TowTruckResource($this->whenLoaded('towTruck')),
            'vehicle' => new VehicleResource($this->whenLoaded('vehicle')),
            'pickup_location' => $this->pickup_location,
            'dropoff_location' => $this->dropoff_location,
            'order_details' => $this->order_details,
            'order_date' => $this->order_date,
            'completion_date' => $this->completion_date,
            'price' => $this->price,
            'status' => $this->status,
            'payed' => $this->payed
        ];
    }
}
