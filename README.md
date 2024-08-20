# AdGuard

**AdGuard** is a Chrome extension that blocks unwanted ads using Manifest V3 and the `declarativeNetRequest` API.

## Features

- Blocks a variety of ad domains
- Minimal impact on browser performance

## Installation

1. **Load Locally**
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select your extension folder

## Usage

Once installed, AdShield will automatically start blocking ads based on the predefined list of ad domains.

## Configuration

AdGuard uses a predefined list of ad domains that it blocks. To update or modify the list, you can edit the `background.js` file in the extension directory.

1. **Clone the Repository**

   ```sh
   git clone https://github.com/yourusername/adshield.git
   
2, **Make Changes**

Edit the background.js file to modify the ad block list or add new features.

3. **Test Locally**

Load your changes by reloading the extension in chrome://extensions/.
