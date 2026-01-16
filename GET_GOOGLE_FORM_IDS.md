# How to Get Google Form Entry IDs

Your Google Form is located at:
https://docs.google.com/forms/d/e/1FAIpQLSe8kLOdaRG_78Iomj_khBPYHk4niPuO4qcdO-v_g96TCLktgw/viewform

## Steps to Get Entry IDs:

1. **Open the form** in your web browser (Chrome, Firefox, etc.)

2. **Open Developer Tools**:
   - Press `F12` or
   - Right-click anywhere on the page → "Inspect" or "Inspect Element"

3. **For each form field**:
   - Right-click on the field (e.g., "Name" input box)
   - Select "Inspect Element" or "Inspect"
   - In the HTML code that appears, find the `<input>` or `<select>` tag
   - Look for `name="entry.XXXXXXXXX"` where XXXXXXXXX is a number
   - Copy that entry ID

4. **Update the HTML file** (`frontend/index.html`):
   - Find the corresponding field in the booking form
   - Replace `name="entry.123456789"` (or whatever placeholder) with the actual entry ID
   - Do this for ALL fields:
     - Name
     - Email
     - Phone
     - Service Type
     - Travel Date
     - Number of Passengers
     - Number of Luggage
     - Pickup Location
     - Destination
     - Special Requests

## Example:

If you inspect the "Name" field and see:
```html
<input type="text" name="entry.1234567890" ...>
```

Then in `index.html`, find:
```html
<input type="text" id="name" name="entry.123456789" ...>
```

And change it to:
```html
<input type="text" id="name" name="entry.1234567890" ...>
```

## Quick Method:

1. Open the form
2. Press F12 to open Developer Tools
3. Click the "Elements" or "Inspector" tab
4. Click the "Select element" tool (or press Ctrl+Shift+C)
5. Click on each form field
6. Look at the highlighted HTML code for the `name="entry.XXXXXXX"` value

## Important Notes:

- Entry IDs are unique to each Google Form
- They look like: `entry.1234567890` (numbers only)
- Each field has a different entry ID
- The order matters - make sure you match the right field to the right entry ID

Once you have all the entry IDs, update them in `frontend/index.html` in the booking form section.
