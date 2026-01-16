# How to Extract Google Form Entry IDs Automatically

## Quick Method - Browser Console Script

I've created a script that will automatically extract all entry IDs from your Google Form.

### Steps:

1. **Open your Google Form** in your browser:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSe8kLOdaRG_78Iomj_khBPYHk4niPuO4qcdO-v_g96TCLktgw/viewform
   ```

2. **Open Browser Developer Tools**:
   - Press `F12` or
   - Right-click → "Inspect" → Go to "Console" tab

3. **Copy and paste the entire script** from `EXTRACT_ENTRY_IDS.js` into the console

4. **Press Enter** to run the script

5. **The script will automatically**:
   - Find all form fields with entry IDs
   - Extract their entry IDs
   - Match them with field labels
   - Display them in order
   - Show both a readable format and JSON format

6. **Copy the results** and share them with me, or update the form yourself

## What the Script Does:

- ✅ Finds all input, select, and textarea fields
- ✅ Extracts entry IDs (like `entry.1234567890`)
- ✅ Tries to match them with field labels
- ✅ Handles date fields with `_year`, `_month`, `_day` components
- ✅ Displays results in an easy-to-read format
- ✅ Provides JSON format for easy copying

## Example Output:

```
📋 Found Entry IDs:

1. Name
   Entry ID: entry.1244685198
   Type: input

2. Email
   Entry ID: entry.1105933673
   Type: input

3. Phone
   Entry ID: entry.1720792458
   Type: input
...
```

## Alternative: Manual Method

If the script doesn't work, you can still extract IDs manually:

1. Open Developer Tools (F12)
2. Go to "Elements" or "Inspector" tab
3. Use the element selector tool (Ctrl+Shift+C)
4. Click on each form field
5. Look for `name="entry.XXXXXXXXX"` in the HTML

## After Extraction:

Once you have all the entry IDs, I can update the form in `frontend/index.html` with the correct IDs automatically!
