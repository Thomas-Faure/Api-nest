import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { MathController } from './math.controller';
import { MathService } from './math.service';

@Module({
  imports: [UserModule],
  controllers: [AppController, MathController],
  providers: [AppService, MathService],
})
export class AppModule {}
