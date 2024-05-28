declare namespace Musickit {
    interface API {    
        storefrontID: string;
    }
type ContentRating = "clean" | "explicit" | null;               
export interface MusickitConfig {
    developerToken: string;
    app: {
        name: string;
        build: string;
        version: string;
    }
    storefront: string;
}
  export interface MusicKitArtwork {
    url: string;
    width: number;
    height: number;
  }
}