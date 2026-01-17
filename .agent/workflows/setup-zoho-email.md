---
description: Setup Zoho Mail for nextpathglobal.my domain
---

# Setup Zoho Mail for nextpathglobal.my

This workflow guides you through setting up professional email addresses (info@nextpathglobal.my, visa@nextpathglobal.my, etc.) using Zoho Mail's free plan.

## Prerequisites
- Access to your domain registrar/DNS management panel (where nextpathglobal.my is registered)
- Admin access to create DNS records

---

## Phase 1: Sign Up for Zoho Mail

### Step 1: Create Zoho Account
1. Go to [https://www.zoho.com/mail/](https://www.zoho.com/mail/)
2. Click **"GET STARTED"** or **"SIGN UP NOW"**
3. Select **"Add your existing domain"**
4. Enter your domain: `nextpathglobal.my`
5. Click **"Add Domain"**

### Step 2: Create Admin Account
1. Enter your details:
   - **Email**: Use a temporary email or create `admin@nextpathglobal.my`
   - **Password**: Create a strong password (save this securely!)
   - **Company Name**: Next Paath Global
2. Complete the signup process
3. You'll be redirected to the Zoho Mail setup wizard

---

## Phase 2: Verify Domain Ownership

### Step 3: Get Verification Code
1. In Zoho Mail setup, you'll see **"Verify Domain Ownership"**
2. Choose verification method: **TXT Record** (recommended)
3. Zoho will provide a TXT record like:
   ```
   Type: TXT
   Host: @ (or nextpathglobal.my)
   Value: zoho-verification=zb12345678.zmverify.zoho.com
   ```
4. **Keep this page open** - you'll need to come back to it

### Step 4: Add TXT Record to Your DNS
1. Log in to your **domain registrar** (where you bought nextpathglobal.my)
   - Common providers: GoDaddy, Namecheap, Cloudflare, etc.
2. Find **DNS Management** or **DNS Settings**
3. Click **"Add Record"** or **"Add DNS Record"**
4. Add the TXT record:
   - **Type**: TXT
   - **Name/Host**: `@` (or leave blank, or `nextpathglobal.my`)
   - **Value**: Paste the verification code from Zoho
   - **TTL**: 3600 (or default)
5. **Save** the record

### Step 5: Verify in Zoho
1. Go back to Zoho Mail setup page
2. Click **"Verify"** or **"Verify TXT Record"**
3. **Wait 5-10 minutes** if verification fails (DNS propagation takes time)
4. Once verified, you'll see a success message ✅

---

## Phase 3: Configure MX Records (Email Routing)

### Step 6: Get MX Records from Zoho
Zoho will provide these MX records (priority matters!):

```
Priority: 10
Host: @
Points to: mx.zoho.com

Priority: 20
Host: @
Points to: mx2.zoho.com

Priority: 50
Host: @
Points to: mx3.zoho.com
```

### Step 7: Add MX Records to Your DNS
1. Go back to your **DNS Management** panel
2. **Delete any existing MX records** (if present)
   - ⚠️ This will stop email from going to old servers
3. Add **three new MX records**:

   **Record 1:**
   - Type: MX
   - Name/Host: `@` (or leave blank)
   - Priority: 10
   - Value: `mx.zoho.com`
   - TTL: 3600

   **Record 2:**
   - Type: MX
   - Name/Host: `@`
   - Priority: 20
   - Value: `mx2.zoho.com`
   - TTL: 3600

   **Record 3:**
   - Type: MX
   - Name/Host: `@`
   - Priority: 50
   - Value: `mx3.zoho.com`
   - TTL: 3600

4. **Save** all records

### Step 8: Verify MX Records in Zoho
1. In Zoho setup, click **"Verify MX Records"**
2. Wait 10-30 minutes if it fails (DNS propagation)
3. Once verified, you'll see ✅

---

## Phase 4: Configure SPF and DKIM (Email Authentication)

### Step 9: Add SPF Record
1. In your **DNS Management**, add a new TXT record:
   - **Type**: TXT
   - **Name/Host**: `@`
   - **Value**: `v=spf1 include:zoho.com ~all`
   - **TTL**: 3600
2. **Save** the record

### Step 10: Add DKIM Record
1. In Zoho Mail, go to **Email Configuration** → **DKIM**
2. Zoho will generate a DKIM record like:
   ```
   Type: TXT
   Host: zmail._domainkey
   Value: v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBA...
   ```
3. Add this TXT record to your DNS:
   - **Type**: TXT
   - **Name/Host**: `zmail._domainkey`
   - **Value**: Paste the DKIM value from Zoho
   - **TTL**: 3600
4. **Save** and verify in Zoho

---

## Phase 5: Create Email Accounts

### Step 11: Create Your Email Addresses
1. In Zoho Mail, go to **Users** → **Add User**
2. Create these accounts:

   **Account 1: info@nextpathglobal.my**
   - First Name: Info
   - Last Name: Next Paath Global
   - Email: info
   - Password: [Create strong password]

   **Account 2: visa@nextpathglobal.my**
   - First Name: Visa
   - Last Name: Services
   - Email: visa
   - Password: [Create strong password]

   **Account 3: mahabub@nextpathglobal.my**
   - First Name: Mahabub
   - Last Name: [Your last name]
   - Email: mahabub
   - Password: [Create strong password]

   **Account 4: airticket@nextpathglobal.my**
   - First Name: Air Ticket
   - Last Name: Services
   - Email: airticket
   - Password: [Create strong password]

3. **Save passwords securely!**

---

## Phase 6: Access Your Email

### Step 12: Login to Webmail
1. Go to [https://mail.zoho.com](https://mail.zoho.com)
2. Enter your email (e.g., `info@nextpathglobal.my`)
3. Enter password
4. You're in! 🎉

### Step 13: Setup Mobile Apps (Optional)
**iOS/Android:**
1. Download **Zoho Mail** app from App Store/Play Store
2. Login with your email and password

**Or use native mail apps:**
1. Open Mail app (iPhone) or Gmail app (Android)
2. Add account → Other/IMAP
3. Use these settings:
   - **IMAP Server**: imap.zoho.com
   - **Port**: 993
   - **SSL**: Yes
   - **SMTP Server**: smtp.zoho.com
   - **Port**: 465
   - **SSL**: Yes

---

## Phase 7: Test Email Delivery

### Step 14: Send Test Emails
1. Login to `info@nextpathglobal.my`
2. Send a test email to your personal email
3. Reply to that email
4. Verify both sending and receiving work ✅

### Step 15: Test All Accounts
Repeat Step 14 for:
- visa@nextpathglobal.my
- mahabub@nextpathglobal.my
- airticket@nextpathglobal.my

---

## Troubleshooting

### DNS Records Not Verifying
- **Wait longer**: DNS can take up to 24-48 hours (usually 10-30 minutes)
- **Check TTL**: Lower TTL = faster propagation
- **Use DNS checker**: [https://mxtoolbox.com](https://mxtoolbox.com)

### Emails Not Sending/Receiving
- Verify all MX records are correct
- Check SPF and DKIM are configured
- Wait for DNS propagation
- Check spam folder

### Can't Login
- Verify email address is correct (include @nextpathglobal.my)
- Reset password if needed
- Clear browser cache

---

## Important Notes

✅ **Free Plan Limits**: 5 users, 5GB per user
✅ **Your website is unaffected**: Only email routing changes
✅ **Keep Resend for automated emails**: Use Zoho for business communication
✅ **Save all passwords securely**: Use a password manager

---

## Next Steps After Setup

1. **Update email signatures** in Zoho Mail settings
2. **Set up email forwarding** if needed (e.g., all emails to info@ also go to mahabub@)
3. **Configure auto-replies** for info@ and visa@
4. **Update your website contact information** to show new email addresses
5. **Notify clients** of new professional email addresses

---

## Support Resources

- Zoho Mail Help: [https://help.zoho.com/portal/en/kb/mail](https://help.zoho.com/portal/en/kb/mail)
- DNS Propagation Checker: [https://dnschecker.org](https://dnschecker.org)
- MX Record Checker: [https://mxtoolbox.com](https://mxtoolbox.com)

---

**Estimated Setup Time**: 30-45 minutes (plus DNS propagation wait time)
