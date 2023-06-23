# [bluefox.email](https://bluefox.email) product strategy

So, this product is focusing on companies, who have a serious email marketing operation. They wanna send out brand consistent emails and they are thriving for good deliverability.

The two main features ensure exactly that:
 - design system - for brand consistent emails
 - sending with AWS SES - for great deliverability.

::: warning Important note
Dealing with spammers is not something I wanna deal with right now. That is why, users will have to use their own AWS SES. If they send out spammy emails, then AWS will punish them (not me) by disabling their SES access.

I know that it's a serious restriction, and will make harder to start using the product, but that's what it is right now. I wanna build this product in a way that I don't need a huge team to maintain it.
:::

## First version
In the first version, users will be able to send single campaigns / newsletters. They can also schedule their emails.

**What's included:**
 - Focus on design system usability + campaigns usability
   - has to involve very, very good defaults
   - also examples
 - AWS send with the users' AWS credentials (per project)
 - Single sends
 - Scheduled sends
 - Basic analytics

**What's not included:**
 - Welcome emails
 - Email series
 - Email automation

## Later versions
There are tons of ideas for later versions, but I wanna focus on what users tell me, and I'm hoping that the software will evolve based on user needs.

Some examples for future developments though:
 - welcome emails
 - email series
 - automation?
 - transactional emails?
 - sending without the need to set up their AWS credentials???



