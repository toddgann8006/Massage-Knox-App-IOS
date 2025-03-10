#import <Foundation/Foundation.h>
#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import <Expo/Expo.h>
#import <UserNotifications/UserNotifications.h>
#import <ExpoModulesCore/ExpoModulesCore.h>
#import <Firebase/Firebase.h>

@interface AppDelegate : EXAppDelegateWrapper <RCTBridgeDelegate, UNUserNotificationCenterDelegate, FIRMessagingDelegate>
@property (nonatomic, strong) EXModuleRegistryAdapter *moduleRegistryAdapter;
@end