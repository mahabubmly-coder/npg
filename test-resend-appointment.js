const { Resend } = require('resend');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const resend = new Resend(process.env.RESEND_API_KEY);

async function testAppointmentEmail() {
    console.log('=== TESTING RESEND APPOINTMENT EMAIL ===');
    console.log('API Key configured:', !!process.env.RESEND_API_KEY);
    console.log('API Key (first 10 chars):', process.env.RESEND_API_KEY?.substring(0, 10));

    try {
        console.log('\n1. Testing Admin Email...');
        const adminResult = await resend.emails.send({
            from: 'Next Path Global <noreply@nextpathglobal.my>',
            to: 'nextpathglobal058@gmail.com',
            subject: 'TEST: Appointment Request',
            html: `
                <h2>Test Appointment Request</h2>
                <p><strong>Name:</strong> Test User</p>
                <p><strong>Email:</strong> test@example.com</p>
                <p><strong>Phone:</strong> +60 12 345 6789</p>
                <p><strong>Service:</strong> MM2H</p>
                <p><strong>Date:</strong> December 31, 2025</p>
                <p><strong>Time:</strong> 05:00 PM</p>
                <p><strong>Mode:</strong> Zoom Call</p>
            `
        });

        console.log('✅ Admin email sent successfully!');
        console.log('Result:', JSON.stringify(adminResult, null, 2));

        console.log('\n2. Testing Client Confirmation Email...');
        const clientResult = await resend.emails.send({
            from: 'Next Path Global <noreply@nextpathglobal.my>',
            to: 'nextpathglobal058@gmail.com', // Using same email for testing
            subject: 'TEST: Appointment Confirmation',
            html: `
                <h2>Hi Test User,</h2>
                <p>Thank you for your appointment request!</p>
                <p><strong>Date:</strong> December 31, 2025</p>
                <p><strong>Time:</strong> 05:00 PM</p>
                <p><strong>Mode:</strong> Zoom Call</p>
            `
        });

        console.log('✅ Client email sent successfully!');
        console.log('Result:', JSON.stringify(clientResult, null, 2));

        console.log('\n=== ALL TESTS PASSED ===');
    } catch (error) {
        console.error('\n❌ ERROR OCCURRED:');
        console.error('Error type:', error.constructor.name);
        console.error('Error message:', error.message);
        console.error('Full error:', error);

        if (error.response) {
            console.error('Response status:', error.response.status);
            console.error('Response data:', error.response.data);
        }
    }
}

testAppointmentEmail();
