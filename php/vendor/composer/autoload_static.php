<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit8a5d2a26e7bf526c23291f7948b5c4be
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit8a5d2a26e7bf526c23291f7948b5c4be::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit8a5d2a26e7bf526c23291f7948b5c4be::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit8a5d2a26e7bf526c23291f7948b5c4be::$classMap;

        }, null, ClassLoader::class);
    }
}
