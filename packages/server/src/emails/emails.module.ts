import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { EmailService } from './emails.service';
import { join } from 'path';
import { MailgunModule } from 'nestjs-mailgun';

console.log(process.env.TRANSPORTER_EMAIL_PASSWORD, process.env.TRANSPORTER_EMAIL)
@Module({
  imports: [
    MailerModule.forRoot({
      // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
      // or
      transport: {
        host: 'smtp-mail.outlook.com',
        port:587,
        secure: false,
        auth: {
          user: process.env.TRANSPORTER_EMAIL,
          pass: process.env.TRANSPORTER_EMAIL_PASSWORD
        },
      }
      // template: {
      //   dir: join(__dirname, 'templates'),
      //   adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
      //   options: {
      //     strict: true,
      //   },
      // },
    }),
    MailgunModule.forRoot({
      username: 'api',
      key: process.env.MAILGUN_API_KEY,
    })
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailsModule { }
