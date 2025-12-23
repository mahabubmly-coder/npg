# Environment Setup for Next Path Global Website

## Required Environment Variables

To enable email functionality for the appointment booking system, you need to configure the Resend API.

### Steps to Configure:

1. **Get a Resend API Key:**
   - Visit [https://resend.com](https://resend.com)
   - Sign up for a free account
   - Navigate to API Keys section
   - Create a new API key

2. **Create `.env.local` file:**
   - In the root directory of the project, create a file named `.env.local`
   - Add the following line:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
   - Replace `re_your_actual_api_key_here` with your actual Resend API key

3. **Restart the development server:**
   ```bash
   npm run dev
   ```

## Verifying the Setup

After setting up the environment variables:
1. Navigate to `/book-appointment` on your website
2. Fill out the appointment form
3. Submit the form
4. You should receive a confirmation email if everything is configured correctly

## Troubleshooting

If you see the error "Email service is not configured":
- Make sure `.env.local` exists in the root directory
- Verify that `RESEND_API_KEY` is spelled correctly
- Ensure there are no extra spaces in the `.env.local` file
- Restart your development server after making changes

## Note

The `.env.local` file is gitignored and should never be committed to version control for security reasons.
