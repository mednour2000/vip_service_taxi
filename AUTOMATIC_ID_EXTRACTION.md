# Automatic Google Form Entry ID Extraction

## 🎯 Easiest Method: Get Pre-Filled Link

This is the **simplest and most reliable** method:

### Steps:

1. **Open your Google Form** in edit mode:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSe8kLOdaRG_78Iomj_khBPYHk4niPuO4qcdO-v_g96TCLktgw/edit
   ```

2. **Click the three-dot menu** (⋮) in the top-right corner

3. **Select "Get pre-filled link"**

4. **Fill in sample values** for each field:
   - Name: "Test Name"
   - Email: "test@example.com"
   - Phone: "1234567890"
   - Service Type: Select one option
   - Travel Date: Pick any date
   - Number of Passengers: Select a number
   - Number of Luggage: Enter a number
   - Pickup Location: "Test Location"
   - Destination: "Test Destination"
   - Special Requests: "Test Request"

5. **Click "Get Link"** at the bottom

6. **Copy the generated URL** - it will look like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSe8kLOdaRG_78Iomj_khBPYHk4niPuO-v_g96TCLktgw/viewform?entry.1244685198=Test+Name&entry.1105933673=test%40example.com&entry.1720792458=1234567890&...
   ```

7. **The entry IDs are in the URL!** Each `entry.XXXXXXXXX=value` shows you the entry ID for that field.

8. **Match them in order:**
   - `entry.1244685198` = First field (Name)
   - `entry.1105933673` = Second field (Email)
   - `entry.1720792458` = Third field (Phone)
   - And so on...

## 🔧 Alternative: Browser Console Script

If the pre-filled link method doesn't work, use the enhanced script:

1. Open your Google Form in view mode
2. Press F12 to open Developer Tools
3. Go to Console tab
4. Copy and paste the entire script from `EXTRACT_ENTRY_IDS.js`
5. Press Enter
6. The script will extract all entry IDs automatically

## 📋 Current Mapping (Based on What We Have)

Based on the IDs you've provided, here's the current mapping:

1. **Name**: `entry.1244685198` ✅
2. **Email**: `entry.1105933673` ✅
3. **Phone**: `entry.1720792458` ✅
4. **Service Type**: `entry.1230324225` ✅
5. **Travel Date**: `entry.1757328894` ✅
6. **Number of Passengers**: `entry.55618107` ✅
7. **Number of Luggage**: `entry.697543864` ✅
8. **Pickup Location**: `entry.2004370144` ✅
9. **Destination**: `entry.34176910` ✅
10. **Special Requests**: `entry.1135974469` ✅

**All entry IDs are already configured!** ✅

## 🧪 Test the Form

To verify all IDs are correct:

1. Fill out the form on your website
2. Submit it
3. Check your Google Form responses
4. If all fields appear correctly, the IDs are correct!

If any field is missing or incorrect, use the pre-filled link method to verify that specific field's entry ID.
