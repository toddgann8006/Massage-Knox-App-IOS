package com.toddgann8006.massageknox;
import expo.modules.ReactActivityDelegateWrapper;

import android.os.Bundle;

import androidx.annotation.NonNull;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.google.android.gms.tasks.Task;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import expo.modules.splashscreen.singletons.SplashScreen;
import expo.modules.splashscreen.SplashScreenImageResizeMode;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.android.gms.tasks.OnCompleteListener;
import android.util.Log;
import android.widget.Toast;

import android.content.Intent;

public class MainActivity extends ReactActivity {
    private static final String TAG = "MainActivity";
  @Override
  protected void onCreate(Bundle savedInstanceState) {

      FirebaseMessaging.getInstance().subscribeToTopic("all")
              .addOnCompleteListener(task -> {
                  String msg = getString(R.string.msg_subscribed);
                  if (!task.isSuccessful()) {
                      msg = getString(R.string.msg_subscribe_failed);
                  }
                  Log.d(TAG, msg);
              });
    super.onCreate(null);
    // SplashScreen.show(...) has to be called after super.onCreate(...)
    // Below line is handled by '@expo/configure-splash-screen' command and it's discouraged to modify it manually
    SplashScreen.show(this, SplashScreenImageResizeMode.CONTAIN, ReactRootView.class, false);
  }


    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "main";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegateWrapper(this, new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        });
    }

    @Override
    public void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        setIntent(intent);
        intent.putExtras(this.getIntent());
    }
}
