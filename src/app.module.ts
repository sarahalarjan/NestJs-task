import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule, AuthModule,MongooseModule.forRoot('mongodb+srv://admin-user:admin@cluster0.upgji.mongodb.net/web-tank?retryWrites=true&w=majority'),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
