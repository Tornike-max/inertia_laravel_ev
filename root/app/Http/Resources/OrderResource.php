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
            'id' => $this->id,
            'user' => new UserResource($this->user),
            'towTruck' => new TowTruckResource($this->towTruck),
            'vehicle' => new VehicleResource($this->vehicle),
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
