package com.rn_wanandroid;

import com.facebook.react.ReactActivity;
import android.os.Bundle;  //add
import org.devio.rn.splashscreen.SplashScreen; //add

public class MainActivity extends ReactActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this, true);
        super.onCreate(savedInstanceState);
    }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "RN_WanAndroid";
  }
}
