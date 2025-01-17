import { Controller, Post, Body, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('webhook')
export class WebhookController {
  @Post()
  handleWebhook(@Req() req: Request, @Body() body: any) {
    const rawBody = req.body;
    console.log('Received raw webhook data:', rawBody.toString());

    // `body` contains the parsed request body if JSON,
    // `req` can be used for raw data or headers.
    // Implement your logic here, such as verifying signatures,
    // or processing the body.

    console.log('Received webhook:', body);

    // Return a response to acknowledge the webhook
    return { message: 'Webhook received' };
  }
}
