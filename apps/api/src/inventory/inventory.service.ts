import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

create(createInventoryDto: any) {
  console.log(createInventoryDto);

  return this.prisma.inventory.create({
    data: createInventoryDto,
  });
}

  findAll() {
    return this.prisma.inventory.findMany();
  }

  findOne(id: number) {
    return this.prisma.inventory.findUnique({
      where: { id },
    });
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return this.prisma.inventory.update({
      where: { id },
      data: updateInventoryDto,
    });
  }

  remove(id: number) {
    return this.prisma.inventory.delete({
      where: { id },
    });
  }
}