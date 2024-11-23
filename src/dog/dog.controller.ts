import { Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import { DogService } from './dog.service';
// import { Request} from 'express';

@Controller('dog')
export class DogController {


    constructor(private readonly dogService: DogService) {}

    @Get()
    public getHello(): string {
        return this.dogService.getHello();
    }

//     @Get('greet/:id')
//     public introduce(@Req() request: Request): string {
//         console.log("params", request.params);
//         console.log("query", request.query);

//         return this.dogService.introduce();
//         // response.status(200).send(result);
        
// }

// @Get('greet/:id')
// public introduce(@Param() params: any): string {
//     console.log("params", params);

//     return this.dogService.introduce();
    
// }

// @Get('greet/:id')
// public introduce(@Param("id") id: string): string {
//     console.log("id", id);

//     return this.dogService.introduce();
    
// }

// @Get('greet/:id')
// public introduce(@Param("id") id: string, @Query() query: any): string {
//     console.log("id", id);
//     console.log("query", query);

//     return this.dogService.introduce();
    
// }

@Get('greet/:id')
public introduce(@Query("name") name: string): string {
    console.log("name", name);

    return this.dogService.introduce();
    
}

@Post('edit')
public modifyDetail(@Body() body: any): string {
    console.log("body", body);

    return this.dogService.modifyDetail();
    
}
}
