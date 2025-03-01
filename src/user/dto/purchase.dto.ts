import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";


export class PurchaseDto {

    // Third party course provider ID
    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    providerId: number;

    // Number of credits involved in purchase
    @ApiProperty()
    @IsInt()
    credits: number;
}