#import <React/RCTEventEmitter.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(KivoraAudioModule, RCTEventEmitter)

RCT_EXTERN_METHOD(configure:(NSString *)owner
                  uri:(NSString *)uri
                  deadline:(NSNumber * _Nullable)deadline
                  episode:(BOOL)episode)

RCT_EXTERN_METHOD(clear:(NSString *)owner)

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

@end
