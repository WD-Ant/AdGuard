# AdGuard

**AdGuard** is a Chrome extension designed to block unwanted ads using Manifest V3 and the `declarativeNetRequest` API.

## Features

- **Ad Blocking**: Blocks a wide range of ad domains, including intrusive banners, pop-ups, and trackers.
- **Privacy Protection**: Uses the `declarativeNetRequest` API, which does not collect or misuse personal data. The API simply filters network requests to prevent unwanted ads from loading.
- **Performance Efficient**: Minimal impact on browser performance compared to older blocking methods.

## Why Manifest V3?

Manifest V3 introduces the `declarativeNetRequest` API, which provides a more secure and privacy-conscious way to filter network traffic. The data processed by the API is used exclusively for blocking ads and trackers, with no access to sensitive user information.

## Installation

1. Download the extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/adguard/ibcoofdafaofkeicogplmgdndohljghb?authuser=0&hl=en).
2. Start browsing ad-free!

## How It Works

The extension uses the `declarativeNetRequest` API to block ads by defining specific filtering rules. These rules ensure that:
- Ads and trackers from known domains are blocked.
- Your browsing experience remains smooth, without compromising performance or security.
