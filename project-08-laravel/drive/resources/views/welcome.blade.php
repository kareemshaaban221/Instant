<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Drive</title>

        <link rel="icon" href="{{asset('drive.ico')}}" type="image/x-icon">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('css/main.css') }}">
    </head>
    <body>
        
        <div class="flex-center position-ref full-height">
            <div class="top-left links">
                <a href="/">
                    <img src="{{asset('drive.ico')}}" class="mr-2" width="50" height="50" alt="">
                    Google Drive
                </a>
            </div>

            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            |
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    Google Drive
                </div>

                <div class="links">
                    <a target="_blank" href="https://workspace.google.com/intl/en/products/drive/?utm_source=google&utm_medium=cpc&utm_campaign=emea-emeaot-all-en-dr-bkws-all-all-trial-b-t1-1011339&utm_content=text-ad-crnurturectrl-none-DEV_c-CRE_471198180644-ADGP_Hybrid%20%7C%20BKWS%20-%20BMM%20%7C%20Txt%20~%20Drive%20~%20General-KWID_43700056763604112-kwd-30890174142-userloc_9073635&utm_term=KW_%2Bgoogle%20%2Bdrive-g&ds_rl=1289227&gclid=CjwKCAiAxJSPBhAoEiwAeO_fP6a4AL7k9wjjWbsq_EldKFSQGDQqy-ei_ITuSyL7fyyS45wLY6jD5xoCno0QAvD_BwE&gclsrc=aw.ds">Docs</a>
                    <a target="_blank" href="https://news.google.com/">News</a>
                    <a target="_blank" href="https://blog.google.com/">Blog</a>
                    <a target="_blank" href="https://github.com/google">GitHub</a>
                </div>
            </div>
        </div>
    </body>
</html>
