import { UpdateUserDto } from './../dto/update-user.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  Req,
  Query,
} from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  // eslint-disable-next-line @typescript-eslint/ban-types
  findAll(@Req() req: Request): Promise<any> {
    // console.log('controller' + req.header('token'));
    console.log('controller');

    console.log(req.headers.authorization);
    // console.log(query);
    return this.usersService.findAll();
  }

  @Get('find')
  async searchUser(@Query() search: { q: string }): Promise<any> {
    return this.usersService.searchUser(search.q);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  updateOne(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<any> {
    return this.usersService.updateOne(id, updateUserDto);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): Promise<any> {
    return this.usersService.deleteOne(id);
  }
}
