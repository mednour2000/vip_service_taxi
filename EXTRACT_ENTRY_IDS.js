// Google Forms Entry ID Extractor - Enhanced Version
// Run this script in your browser console while on the Google Form page
// Works with both the form view and the form editor

(function() {
    console.log('🔍 Extracting Google Form Entry IDs...\n');
    console.log('Using multiple extraction methods...\n');
    
    const entryIds = [];
    const fieldLabels = [];
    
    // Method 1: Try to get from FB_PUBLIC_LOAD_DATA (most reliable)
    let formData = null;
    try {
        const scripts = document.querySelectorAll('script');
        scripts.forEach(script => {
            const text = script.textContent;
            if (text.includes('FB_PUBLIC_LOAD_DATA')) {
                const match = text.match(/FB_PUBLIC_LOAD_DATA_\s*=\s*(\[.*?\]);/s);
                if (match) {
                    try {
                        formData = JSON.parse(match[1]);
                        console.log('✅ Found form data via FB_PUBLIC_LOAD_DATA');
                    } catch (e) {
                        console.log('⚠️ Could not parse FB_PUBLIC_LOAD_DATA');
                    }
                }
            }
        });
    } catch (e) {
        console.log('⚠️ Method 1 failed, trying alternative methods...');
    }
    
    // Method 2: Find all input, select, and textarea elements with entry IDs
    const formElements = document.querySelectorAll('input[name^="entry."], select[name^="entry."], textarea[name^="entry."]');
    
    // Process form elements
    formElements.forEach((element, index) => {
        const entryId = element.getAttribute('name');
        const fieldType = element.tagName.toLowerCase();
        
        // Try to find the label using multiple methods
        let label = '';
        
        // Method A: Look for common Google Forms label classes
        const labelElement = element.closest('.freebirdFormviewerViewItemsItemItem') || 
                           element.closest('.mdc-form-field') ||
                           element.closest('div[role="listitem"]') ||
                           element.closest('[data-params]') ||
                           element.closest('.Qr7Oae');
        
        if (labelElement) {
            const labelText = labelElement.querySelector('.freebirdFormviewerViewItemsItemItemTitle, .mdc-text-field__label, [role="heading"], .M7eMe, .o3Dpx');
            if (labelText) {
                label = labelText.textContent.trim();
            }
        }
        
        // Method B: Try aria-label or placeholder
        if (!label) {
            label = element.getAttribute('aria-label') || 
                   element.getAttribute('placeholder') || 
                   element.getAttribute('aria-labelledby');
        }
        
        // Method C: Try to get from FB_PUBLIC_LOAD_DATA if available
        if (!label && formData && formData[1]) {
            const formItems = formData[1];
            formItems.forEach((item, idx) => {
                if (item && item[4] && item[4][0] && item[4][0][1]) {
                    const itemEntryId = item[1];
                    if (itemEntryId && entryId.includes(itemEntryId.toString())) {
                        label = item[4][0][1] || label;
                    }
                }
            });
        }
        
        // Avoid duplicates
        if (!entryIds.find(e => e.entryId === entryId)) {
            entryIds.push({
                index: entryIds.length + 1,
                entryId: entryId,
                type: fieldType,
                label: label || `Field ${entryIds.length + 1}`,
                element: element
            });
        }
    });
    
    // Method 3: Extract from FB_PUBLIC_LOAD_DATA if available
    if (formData && formData[1]) {
        console.log('✅ Extracting from form structure data...');
        const formItems = formData[1];
        formItems.forEach((item, index) => {
            if (item && item[1]) {
                const entryId = `entry.${item[1]}`;
                let label = '';
                
                if (item[4] && item[4][0] && item[4][0][1]) {
                    label = item[4][0][1];
                }
                
                // Check if we already have this entry ID
                if (!entryIds.find(e => e.entryId === entryId)) {
                    entryIds.push({
                        index: entryIds.length + 1,
                        entryId: entryId,
                        type: item[3] || 'unknown',
                        label: label || `Field ${entryIds.length + 1}`,
                        element: null
                    });
                }
            }
        });
    }
    
    // Also check for hidden inputs (like date components)
    const hiddenInputs = document.querySelectorAll('input[type="hidden"][name^="entry."]');
    hiddenInputs.forEach((element) => {
        const entryId = element.getAttribute('name');
        // Check if this is a date component
        if (entryId.includes('_year') || entryId.includes('_month') || entryId.includes('_day')) {
            const baseId = entryId.split('_')[0];
            if (!entryIds.find(e => e.entryId === baseId)) {
                entryIds.push({
                    index: entryIds.length + 1,
                    entryId: baseId,
                    type: 'date',
                    label: 'Travel Date (date field)',
                    element: element
                });
            }
        }
    });
    
    // Display results
    console.log('📋 Found Entry IDs:\n');
    console.log('='.repeat(60));
    
    entryIds.forEach((item, index) => {
        console.log(`${index + 1}. ${item.label}`);
        console.log(`   Entry ID: ${item.entryId}`);
        console.log(`   Type: ${item.type}`);
        console.log('');
    });
    
    console.log('='.repeat(60));
    console.log('\n📝 Copy this mapping:\n');
    
    // Generate mapping for easy copy-paste
    const mapping = entryIds.map((item, index) => {
        return `${index + 1}. ${item.label}: \`${item.entryId}\``;
    }).join('\n');
    
    console.log(mapping);
    
    // Also create a JSON object
    const jsonMapping = {};
    entryIds.forEach((item) => {
        jsonMapping[item.label] = item.entryId;
    });
    
    console.log('\n📦 JSON Format:\n');
    console.log(JSON.stringify(jsonMapping, null, 2));
    
    // Highlight elements on the page
    console.log('\n✨ Entry IDs extracted! Check the console output above.');
    console.log('💡 Tip: The form fields are now highlighted in the console output.');
    
    return entryIds;
})();
