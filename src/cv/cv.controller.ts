import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CvService } from './cv.service';
import { CvEntity } from './entities/cv.entity/cv.entity';
import { AddCvDto } from './dto/add-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';

import { JwtAuthGuard } from 'src/user/Guards/jwt-auth.guard';
import { User } from 'src/Decorators/user.decorator';

@Controller('cv')
export class CvController {
  constructor(private cvService: CvService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getCv(@User() user): Promise<CvEntity[]> {
    console.log(user);
    return this.cvService.getCv(user);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async addCv(@Body() cv: AddCvDto, @User() user) {
    return await this.cvService.addCv(cv, user);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateCv(@Param('id') id, @Body() cv: UpdateCvDto) {
    return await this.cvService.updateCv(+id, cv);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteCv(@Param('id', ParseIntPipe) id, @User() user) {
    return this.cvService.deleteCv(id, user);
  }

  @Delete('/soft/:id')
  @UseGuards(JwtAuthGuard)
  async softDeleteCv(@Param('id') id) {
    return await this.cvService.softDeleteCv(id);
  }

  @Get('stats')
  @UseGuards(JwtAuthGuard)
  async cvNumberByAge() {
    return await this.cvService.cvNumberByAge();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findById(@Param('id') id, @User() user) {
    return await this.cvService.findById(id, user);
  }

  @Get('restore/:id')
  @UseGuards(JwtAuthGuard)
  async restoreCv(@Param('id', ParseIntPipe) id) {
    return await this.cvService.restoreCv(id);
  }
}
