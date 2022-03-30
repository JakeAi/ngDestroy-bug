import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
import { Trace } from '@nativescript/core';

import { AppModule } from './app/app.module';

// Trace.enable();
// Trace.setCategories('ns-route-reuse-strategy,ns-router');

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
