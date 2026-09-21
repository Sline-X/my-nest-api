import {Body, Controller, Patch} from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @Patch()
    resetPassword(@Body() payload: any) {
        // нужно извлечь текущего авторизованного пользователя
    }
}