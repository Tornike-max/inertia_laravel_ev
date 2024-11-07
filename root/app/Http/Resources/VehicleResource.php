<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VehicleResource extends JsonResource
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
            'user_id' => $this->user_id,
            'make' => $this->make,
            'model' => $this->model,
            'year' => $this->year,
            'kg' => $this->kg,
            'color' => $this->color,
            'license_plate' => $this->license_plate,
            'created_at' => $this->created_at
        ];
    }
}
