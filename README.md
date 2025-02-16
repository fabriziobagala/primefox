# 🦊 Primefox

Enhanced Firefox user.js configuration for privacy, security and performance.

## 🎯 Goals

- Strengthen user privacy
- Improve browser security
- Optimize performance
- Maintain compatibility with most websites

## 📋 Prerequisites

- Firefox 128 ESR or later versions
- Basic knowledge of Firefox configuration
- Backup of your Firefox profile (recommended)

## 🚀 Installation

1. Find your Firefox profile folder
    - Type `about:profiles` into the address bar
    - In the profile currently in use, click on "Show in Finder" or "Open Folder" (depends on the OS) in the root folder row
2. Download the file
   - Directly: [here](user.js)
   - Via cURL: `curl -o user.js https://raw.githubusercontent.com/fabriziobagala/primefox/main/user.js`
3. Copy the `user.js` file to the Firefox profile folder
4. Restart Firefox to apply the changes

## 🛠️  Recommended Tools

### <img src="https://avatars.githubusercontent.com/u/15990069" width="24" align="texttop" /> Bitwarden

Open source password manager to securely manage your credentials.

- 🔗 **Link**
    - [Official website](https://bitwarden.com/)
    - [GitHub repository](https://github.com/bitwarden)
- ⚙️ **Recommended configurations**
    - Enable two-factor authentication using hardware keys (e.g., Yubico)
    - Set a vault timeout
    - Use Argon2id for password derivation
    - Unlock with biometric data

### <img src="https://avatars.githubusercontent.com/u/10848549" width="24" align="texttop" /> Mullvad VPN

Privacy-focused VPN service, does not require email for registration.

- 🔗 **Link**
    - [Official website](https://mullvad.net/en)
    - [GitHub repository](https://github.com/mullvad)
- ⚙️ **Recommended configurations**
    - Launch the app on startup
    - Enable automatic connection
    - Use the WireGuard protocol
    - Enable obfuscation
    - Enable quantum attack resistant tunneling
    - Enable DAITA

### <img src="https://github.com/gorhill/uBlock/raw/master/src/img/ublock.svg" width="24" align="texttop" /> uBlock Origin

Efficient blocking of ads and trackers, good for performance and privacy.

- 🔗 **Link**
    - [Official website](https://ublockorigin.com/)
    - [GitHub repository](https://github.com/gorhill/uBlock)
- 🛡️ **Additional filters**
    - AdGuard URL Tracking Protection
    - EasyList/uBO – Cookie Notices
    - EasyList – Social Widgets
    - EasyList – Annoyances
    - uBlock filters – Annoyances

These tools were selected for their reliability, focus on privacy, and compatibility with Primefox configurations.

## 📜 License

This project is distributed under the MIT license. See the [LICENSE](LICENSE) file for more details.

## 🙏 Credits

- Primefox includes configurations and content adapted from [Betterfox](https://github.com/yokoffing/Betterfox), [Arkenfox](https://github.com/arkenfox/user.js), and [Narsil](https://codeberg.org/Narsil/user.js). Credits for overlapping content go to the original authors.
- Thanks to the [Firefox](https://www.mozilla.org/en-US/firefox/new/) team and developers working on [Bugzilla](https://bugzilla.mozilla.org/home), who fight for the open web.

---
*Primefox is an independent project and is not affiliated with Mozilla.
