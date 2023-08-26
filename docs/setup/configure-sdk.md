---
sidebar_position: 2
---

# Configuring the Wii U SDK

## Downloading files

**You will have to use a Chromium based browser if these links do not work for you.** This is just how Google Drive works, and we can't do anything about it.

- [Nintendo Dev Interface](https://drive.google.com/file/d/1IkHzzYFkVoYlOfXvK8qyP0Bl6JbrRqJu/view?usp=sharing)
- [Wii U SDK](https://drive.google.com/file/d/1C8Bggyo62wdylBdlgVtCbvnxFWY-ChvX/view?usp=sharing)
- [ghs folder](https://drive.google.com/file/d/1wJjiMcQh6HvnvstloE_zlvX0ojZo8p_A/view?usp=sharing)

## Installation

### Nintendo Dev Interface

- After downloading & installing NDI, open it, login to your Nintendo developer account and select `Dev Environments`.
- Click on `Add Environment`, `Create From Archive`.
- Find & select the `.megazarf` file, previously downloaded.

### ghs folder

Extract the ghs .zip previously downloaded into `C:\ghs\`.

### Environment variables

Find `C:\Nintendo\CafeSDK\SDK\cafe_sdk` folder and launch the `cafex_env.bat` file. If it closes immediately, do the following:

- Install [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701) (preinstalled on Windows 11)
- Right-click an empty space in `C:\Nintendo\CafeSDK\SDK\cafe_sdk`
- Click `Open in Terminal...`
- Type `cmd` if you're in a Powershell prompt
- Type `cafex_env.bat`, which should output some text and close after a while.