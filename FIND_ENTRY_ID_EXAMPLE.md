# How to Find Entry ID in Google Forms HTML

## The Entry ID is in the `name` attribute

When you inspect a Google Form field, you need to look for the `name` attribute. The entry ID will look like:

```html
name="entry.1234567890"
```

## Example of what you're looking for:

The HTML you shared:
```html
<input type="text" class="whsOnd zHQkBf" jsname="YPqjbf" ...>
```

**This doesn't show the `name` attribute yet.** You need to look a bit further in the HTML.

## Where to find it:

### Method 1: Look for the `name` attribute in the same `<input>` tag

The complete input tag should look something like:
```html
<input 
    type="text" 
    class="whsOnd zHQkBf" 
    jsname="YPqjbf" 
    name="entry.1234567890"    ← THIS IS THE ENTRY ID
    autocomplete="off" 
    tabindex="0" 
    ...>
```

### Method 2: Check the parent `<form>` element

Sometimes the entry ID might be referenced in the form's structure. Look for:
```html
<form action="https://docs.google.com/forms/d/e/1FAIpQLSe8kLOdaRG_78Iomj_khBPYHk4niPuO4qcdO-v_g96TCLktgw/formResponse" method="POST">
    <input name="entry.1234567890" ...>  ← Entry ID here
</form>
```

### Method 3: Use Browser Search

1. In Developer Tools (F12), press `Ctrl+F` (or `Cmd+F` on Mac)
2. Search for: `entry.`
3. This will highlight all entry IDs in the page

## Step-by-Step:

1. **Right-click on the form field** (e.g., the "Name" input box)
2. **Select "Inspect Element"**
3. **In the HTML panel**, look at the `<input>` tag
4. **Scroll through the attributes** or use `Ctrl+F` to search for `name=`
5. **Find**: `name="entry.XXXXXXXXX"` where XXXXXXXXX is a number

## Example Entry IDs you might see:

- `name="entry.1234567890"`
- `name="entry.987654321"`
- `name="entry.111222333"`

Each field will have a different number.

## If you can't find it:

1. **Expand the HTML tree**: Click the arrow next to the `<input>` tag to see all attributes
2. **Look at the parent elements**: Sometimes it's in a `<div>` wrapper
3. **Check the form's source**: View page source (Ctrl+U) and search for `entry.`
4. **Use the Network tab**: 
   - Open Developer Tools → Network tab
   - Submit the form
   - Look at the POST request to see the entry IDs being sent

## Quick Visual Guide:

```
Developer Tools View:
┌─────────────────────────────────────┐
│ <input                               │
│   type="text"                        │
│   class="whsOnd zHQkBf"              │
│   jsname="YPqjbf"                   │
│   name="entry.1234567890"  ← FIND   │
│   autocomplete="off"                 │
│   ...                                │
│ />                                   │
└─────────────────────────────────────┘
```

The `name="entry.1234567890"` is what you need to copy and paste into your HTML file!
