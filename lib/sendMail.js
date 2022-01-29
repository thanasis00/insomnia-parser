import Mustache from 'mustache';
import Mail from '@sendgrid/mail';
import fs from 'fs';
const cwd = process.cwd();
const template = fs.readFileSync(`${cwd}/lib/email.tpl`, 'utf8');

export default function sendMail(listings) {
  let body = Mustache.render(template, { listings: listings })
  useMailService(body)
}

function useMailService(body) {
  Mail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.MAILTO,
    from: process.env.FROM,
    subject: process.env.SUBJECT,
    html: body,
  };
  Mail.send(msg);
}
