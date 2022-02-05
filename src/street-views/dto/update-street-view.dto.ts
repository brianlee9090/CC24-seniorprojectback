import { PartialType } from '@nestjs/mapped-types';
import { CreateStreetViewDto } from './create-street-view.dto';

export class UpdateStreetViewDto extends PartialType(CreateStreetViewDto) {}
