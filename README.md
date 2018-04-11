# VueJS / Mendix widget

If you're interested in using VueJS as your JavaScript frontend framework when developing Mendix widgets, then this boilerplate will make you feel right at home. We're using NPM, Babel and Webpack to neatly wrap-up the code into the MPK file that Mendix uses as it's widget archive.

# Requirements

First and foremost, make sure you have Node/NPM installed. If you don't, please visit https://nodejs.org and download and install latest LTS version (LTS stands for Lont Term Support. Usually the most stable version.)

Second thing that you'll need to have is yeah, Linux/Mac. Or to be more specific, Linux bash terminal. If you're using Linux or Mac, then you should feel right at home for the next few steps. However, if you're on Windows OS (and chances are very high since Mendix is Windows-specific platform), then you'll need a little help with this.

#### NOTE: Windows users, follow these next few steps please

I suggest you go ahead and visit https://git-scm.com/downloads, and download Git Bash app. This is a terminal window that when installed can use UNIX-style commands like rm, ls, and so on.

Another thing that you're going to need, if you follow this route, is to install the "zip" library for Git Bash. This is because git-bash is really just a cut down version of mingw. Fortunately you can manually install the command yourself, not only zip, but any command you can get from gnuwin32.

Here are the steps you can follow.

1. Go to the following link
https://sourceforge.net/projects/gnuwin32/files/

2. Find out whatever command you are missing
Here I need zip and bzip2 for zip command. Because zip command relies on bzip2.dll to run. Otherwise you will get error “error while loading shared libraries: ?: cannot open shared object file: No such file or directory”.

3. Unzip the downloaded files
Here I am downloading “zip-3.0-bin.zip” for “zip.exe” and “bzip2-1.0.5-bin.zip” for “bzip2.dll” in the bin folder. <unzipped file>/bin/<command>.exe

4. Copy the command exe file into git-bash folder
Here I am copying “zip.exe” and “bzip2.dll” to <Program folder>\Git\usr\bin.

# How to use

After you're done with requirements (bash terminal, node/NPM installed), you can open up the bash terminal and follow these steps to get up and running.

First of all, let's get the widget downloaded (using `git clone` command). Open up the Git Bash terminal and run these commands:

```
git clone https://github.com/Intonovi/mendix-vuejs-widget-boilerplate.git MxVueWidget
cd MxVueWidget
npm install
```

This will download the project and install all the dependencies that we'll need for compiling our Mendix widget. This step can take up a few minutes, as it's going to to online and download a bunch of NPM libraries as well.

Next thing to do is compile the widget:

```
npm run build
```

After that's done you should now have, in your build folder, widget.mpk file. You can rename this to whatever you feel like naming it, but recommended way is to rename it to HelloWorld.mpk, or whatever the name you'll assign to your widget.

# Tests
You have a Mendix app that comes with the boilerplate inside the "./mendix" folder. Run the app (doubleclick the MPR file, convert in place, of course) and you're going to have a very, very basic test environment for your widget. Run locally and see your new widget in action!

#### NOTE: Every time you run `npm run build` to build your widget, you need to re-run/refresh the Mendix so that you reflect the changes in code. Webpack will copy the widget to the "./mendix" folder, so you just have to click that button.

# Credits:
I wish to thank the @Finaps for amazing React boilerplate, which we've used as a "starting point" for the VueJS widget boilerplate. Should you want to go with the React as your frontend framework of choice for your widget, please check this boilerplate out:

https://github.com/Finaps/boilerplate-mendix-react-widget

# Modified for VueJS:
Petar Vukmanovic | Intonovi |
https://www.linkedin.com/company/intonovi/