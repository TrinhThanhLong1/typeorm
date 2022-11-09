import * as aws from 'aws-sdk';
import { Injectable } from '@nestjs/common';
import { SEND_EMAIL_CONFIG } from '../../configs/constant.config';

interface MailParams {
  mailTo: string;
  contentHtml: string;
  subject: string;
}

@Injectable()
export class SendMailService {
  private fromEmail: string;
  constructor() {
    aws.config.credentials = {
      accessKeyId: SEND_EMAIL_CONFIG.sesAccessKey,
      secretAccessKey: SEND_EMAIL_CONFIG.sesSecretKey,
    };
    aws.config.update({
      region: SEND_EMAIL_CONFIG.awsRegion,
    });

    this.fromEmail = SEND_EMAIL_CONFIG.sesSendFrom;
  }

  public async sendMail(params: MailParams) {
    const { mailTo, contentHtml, subject } = params;
    const sendMailParams = {
      Destination: {
        ToAddresses: [mailTo],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: contentHtml,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: subject,
        },
      },
      Source: this.fromEmail,
    };

    return new aws.SES().sendEmail(sendMailParams).promise();
  }
}
