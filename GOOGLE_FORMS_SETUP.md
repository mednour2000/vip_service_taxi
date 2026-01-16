# Google Forms Setup Guide

This website uses Google Forms to collect booking requests. Follow these steps to set up your Google Form:

## Step 1: Create Your Google Form

1. Go to [https://forms.google.com](https://forms.google.com)
2. Click **"Blank"** to create a new form
3. Name your form: "VIP Service Taxi - Booking Requests"

## Step 2: Add Form Fields

Add the following fields in this exact order:

1. **Name** (Short answer)
2. **Email** (Short answer)
3. **Phone** (Short answer)
4. **Service Type** (Dropdown or Multiple choice)
   - Airport Transfer
   - Multi-Day Tour
   - Tour
5. **Travel Date** (Date)
6. **Number of Passengers** (Dropdown)
   - Options: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10+
7. **Pickup Location** (Short answer)
8. **Destination** (Short answer)
9. **Special Requests** (Paragraph)

## Step 3: Get Your Form URL

1. Click the **"Send"** button (top right)
2. Click the **"Link"** icon (chain link)
3. Copy the URL - it should look like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSfXXXXXXXXXXXXXXXXXXXXXXXXX/formResponse
   ```

## Step 4: Get Field Entry IDs

1. Open your Google Form in a web browser
2. Right-click on the first field (Name) → **Inspect** (or press F12)
3. In the HTML, find the `<input>` tag
4. Look for `name="entry.XXXXXXXXX"` - this is your field ID
5. Repeat for each field and note down all entry IDs

**Example:**
```html
<input type="text" name="entry.123456789" ...>
<!-- entry.123456789 is the field ID -->
```

## Step 5: Update the HTML File

1. Open `frontend/index.html`
2. Find the `<form id="bookingForm">` element (around line 172)
3. Update the `action` attribute with your Google Form URL:
   ```html
   <form ... action="YOUR_GOOGLE_FORM_URL_HERE" ...>
   ```
   Replace `YOUR_GOOGLE_FORM_URL_HERE` with your actual URL

4. Update all `name="entry.XXXXXXX"` attributes to match your Google Form field IDs:

   ```html
   <!-- Name field -->
   <input ... name="entry.123456789" ...>
   
   <!-- Email field -->
   <input ... name="entry.987654321" ...>
   
   <!-- Phone field -->
   <input ... name="entry.111111111" ...>
   
   <!-- Service Type field -->
   <select ... name="entry.777777777" ...>
   
   <!-- Date field -->
   <input ... name="entry.222222222" ...>
   
   <!-- Passengers field -->
   <select ... name="entry.333333333" ...>
   
   <!-- Pickup Location field -->
   <input ... name="entry.444444444" ...>
   
   <!-- Destination field -->
   <input ... name="entry.555555555" ...>
   
   <!-- Special Requests field -->
   <textarea ... name="entry.666666666" ...>
   ```

## Step 6: Test Your Form

1. Open `frontend/index.html` in a web browser
2. Fill out the booking form
3. Submit the form
4. Check your Google Form responses to verify the submission

## Troubleshooting

### Form not submitting?
- Make sure the Google Form URL is correct
- Verify all entry IDs match your Google Form fields
- Check browser console for errors (F12 → Console)

### Data not appearing in Google Forms?
- Double-check that entry IDs are correct
- Make sure field types match (text, email, date, etc.)
- Verify the form action URL is complete

### Need help?
- Google Forms documentation: https://support.google.com/docs/answer/6281888
- Check the browser console for error messages

## Alternative: Use Google Forms Embed

If you prefer, you can also embed the Google Form directly:

1. In Google Forms, click **"Send"**
2. Click the **"<>"** icon (HTML embed)
3. Copy the iframe code
4. Replace the booking form section in `index.html` with the embed code

However, the current method (submitting to Google Forms) gives you more control over the form styling and user experience.
