import { Cache } from "@raycast/api";

export class AudioInputLevelCache {
  private static cache = new Cache();
  private static AudioInputLevelPreviousKey = "audio-input-level-previous";
  private static AudioInputLevelCurrentKey = "audio-input-level-current";
  private static AudioInputLevelDefault = "50";

  static get prevInputLevel(): string {
    return (
      this.cache.get(AudioInputLevelCache.AudioInputLevelPreviousKey) ?? AudioInputLevelCache.AudioInputLevelDefault
    );
  }

  static set prevInputLevel(v: string) {
    this.cache.set(AudioInputLevelCache.AudioInputLevelPreviousKey, v);
  }

  static get curInputLevel(): string {
    return (
      this.cache.get(AudioInputLevelCache.AudioInputLevelCurrentKey) ?? AudioInputLevelCache.AudioInputLevelDefault
    );
  }

  static set curInputLevel(v: string) {
    this.cache.set(AudioInputLevelCache.AudioInputLevelCurrentKey, v);
  }
}
