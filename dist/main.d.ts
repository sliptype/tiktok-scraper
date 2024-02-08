import { CookieJar } from 'netscape-cookies-parser';

/**
 * Represents the video File
 */
interface IVideo {
    /**
     * the unique id of the video
     */
    id: string;
    /**
     * the description of the video if available
     */
    description: string;
    /**
     * the date on which the video was created on tiktok
     */
    createdAt: string;
    /**
     * height of the video
     */
    height: number;
    /**
     * width of the video
     */
    width: number;
    /**
     * duration of the video
     */
    duration: number;
    /**
     * resolution of the video
     */
    resolution: string;
    /**
     * Number of times the video was shared
     */
    shareCount: number;
    /**
     * Number of likes on the video
     */
    likesCount: number;
    /**
     * Number of comments on the video
     */
    commentCount: number;
    /**
     * Number of times the video has been played
     */
    playCount: number;
    /**
     * a direct download url for the video
     */
    downloadURL: string;
    /**
     * a direct url to the video cover
     */
    cover?: string;
    /**
     * A direct url to the dynamic video cover
     */
    dynamicCover?: string;
    /**
     * a direct play url for the video
     */
    playURL?: string;
    /**
     * the format of the video
     */
    format?: string;
    /**
     * Author of the Video
     */
    author?: string;
    /**
     * Direct Link to the video
     */
    directVideoUrl?: string;
}

/**
 * Represents the author of the tiktok video
 */
interface IAuthor {
    /**
     * Unique ID of the Author
     */
    uniqueId: string;
    /**
     * ID of the Author
     */
    id: number;
    /**
     * Author Avatar Link
     */
    avatar: string;
    /**
     * Bio of the Author
     */
    signature?: string;
    /**
     * Registration Date of the User
     */
    user_created?: string;
    /**
     * Whether the Author is verified
     */
    verified?: boolean;
}

/**
 * Represents the music of the video!
 */
interface IMusic {
    /**
     * tiktok music ic
     */
    id: number;
    /**
     * tiktok music title
     */
    title: string;
    /**
     * direct link to this music
     */
    playURL: string;
    /**
     * tiktok music original cover
     */
    coverLarge: string;
    /**
     * tiktok music thumnail cover
     */
    coverThumb: string;
    /**
     * tiktok music author
     */
    author: string;
    /**
     * tiktok music duration
     */
    duration: number;
    /**
     * Whether the music is original or user made
     */
    original?: boolean;
    /**
     * The Album name if it is part of an album
     */
    album?: string;
}

/**
 * The Result of the Scraping process
 */
interface ITikTokResult {
    author: IAuthor;
    video: IVideo;
    audio: IMusic;
    shareCount: number;
    likesCount: number;
    commentCount: number;
    playCount: number;
    createdAt: string;
    tiktokLink: string;
    thumbnail: string;
}

interface IUser {
    /**
     * the id of the User
     */
    id: string;
    /**
     * The tiktok unique id of the User
     */
    uniqueId: string;
    /**
     * optional nickname of the User
     */
    nickname: string;
    /**
     * the avatar link of the User
     */
    avatar: string;
    /**
     * the bio description of the User
     */
    signature: string;
    /**
     * the date of the creation of the User
     */
    createdAt: string;
    /**
     * Whether the User is a verified User by TikTok
     */
    verified: boolean;
    /**
     * the secret UID of the User
     */
    secretUID: string;
    /**
     * The link in the bio if the it contains any
     */
    bioLink: string;
    /**
     * Whether the account privacy is set to private
     */
    privateAccount: boolean;
    /**
     * Number of followers for this User
     */
    followers: number;
    /**
     * Number of the accounts this user follows
     */
    following: number;
    /**
     * How many likes this User got over the time
     */
    hearts: number;
    /**
     * Number of the Videos this User has posted
     */
    videos: number;
}

declare class User implements IUser {
    /**
     * the id of the User
     */
    id: string;
    /**
     * The tiktok unique id of the User
     */
    uniqueId: string;
    /**
     * optional nickname of the User
     */
    nickname: string;
    /**
     * the avatar link of the User
     */
    avatar: string;
    /**
     * the bio description of the User
     */
    signature: string;
    /**
     * the date of the creation of the User
     */
    createdAt: string;
    /**
     * Whether the User is a verified User by TikTok
     */
    verified: boolean;
    /**
     * the secret UID of the User
     */
    secretUID: string;
    /**
     * The link in the bio if the it contains any
     */
    bioLink: string;
    /**
     * Whether the account privacy is set to private
     */
    privateAccount: boolean;
    /**
     * Number of followers for this User
     */
    followers: number;
    /**
     * Number of the accounts this user follows
     */
    following: number;
    /**
     * How many likes this User got over the time
     */
    hearts: number;
    /**
     * Number of the Videos this User has posted
     */
    videos: number;
    /**
     *
     * @param id the id of the User
     * @param uniqueId The tiktok unique id of the User
     * @param nickname optional nickname of the User
     * @param avatar the avatar link of the User
     * @param signature the bio description of the User
     * @param createdAt the date of the creation of the User
     * @param verified Whether the User is a verified User by TikTok
     * @param secretUID the secret UID of the User
     * @param bioLink The link in the bio if the it contains any
     * @param privateAccount Whether the account privacy is set to private
     * @param isUnderAge18 Whether the User is underage
     * @param followers Number of followers for this User
     * @param following Number of the accounts this user follows
     * @param hearts How many likes this User got over the time
     * @param videos Number of the Videos this User has posted
     */
    constructor(id: string, uniqueId: string, nickname: string, avatar: string, signature: string, createdAt: string, verified: boolean, secretUID: string, bioLink: string, privateAccount: boolean, followers: number, following: number, hearts: number, videos: number);
}

/**
 * TikTok Result Class Template
 */
declare class TikTokResult implements ITikTokResult {
    /**
     * Represents the IAuthor interface.
     */
    author: IAuthor;
    /**
     * Represents the IVideo interface.
     */
    video: IVideo;
    /**
     * Represents the IAudio interface.
     */
    audio: IMusic;
    /**
     * Number of shares for this video.
     */
    shareCount: number;
    /**
     * Number of Likes for this video.
     */
    likesCount: number;
    /**
     * Number of comments for this video.
     */
    commentCount: number;
    /**
     * Number of the times this video has been played.
     */
    playCount: number;
    /**
     * When the video was created.
     */
    createdAt: string;
    /**
     * The absolute link of this video.
     */
    tiktokLink: string;
    /**
     * thumbnaill of the video.
     */
    thumbnail: string;
    /**
     *
     * @param author Represents the IAuthor interface.
     * @param video Represents the IAudio interface.
     * @param audio Represents the IAudio interface.
     * @param shareCount Number of shares for this video.
     * @param likesCount Number of Likes for this video.
     * @param commentCount Number of comments for this video.
     * @param playCount Number of the times this video has been played.
     * @param tiktok_created_At When the video was created.
     * @param tiktokLink The absolute link of this video.
     * @param thumbnail thumbnaill of the video.
     */
    constructor(author: IAuthor, video: IVideo, audio: IMusic, shareCount: number, likesCount: number, commentCount: number, playCount: number, tiktok_created_At: string, tiktokLink: string, thumbnail: string);
}

declare class Video implements IVideo {
    /**
     * the unique id of the video
     */
    id: string;
    /**
     * the description of the video if available
     */
    description: string;
    /**
     * the date on which the video was created on tiktok
     */
    createdAt: string;
    /**
     * height of the video
     */
    height: number;
    /**
     * width of the video
     */
    width: number;
    /**
     * duration of the video
     */
    duration: number;
    /**
     * resolution of the video
     */
    resolution: string;
    /**
     * Number of times the video was shared
     */
    shareCount: number;
    /**
     * Number of likes on the video
     */
    likesCount: number;
    /**
     * Number of comments on the video
     */
    commentCount: number;
    /**
     * Number of times the video has been played
     */
    playCount: number;
    /**
     * a direct download url for the video
     */
    downloadURL: string;
    /**
     * a direct url to the video cover
     */
    cover?: string | undefined;
    /**
     * a direct url to the dynamic video cover
     */
    dynamicCover?: string | undefined;
    /**
     * a direct play url for the video
     */
    playURL?: string | undefined;
    /**
     * the format of the video
     */
    format?: string | undefined;
    /**
     * Author of the Video
     */
    author?: string | undefined;
    /**
     * Direct Link to the video
     */
    directVideoUrl?: string | undefined;
    /**
     *
     * @param id the unique id of the video
     * @param description the description of the video if available
     * @param createdAt the date on which the video was created on tiktok
     * @param height height of the video
     * @param width width of the video
     * @param duration duration of the video
     * @param resolution resolution of the video
     * @param shareCount Number of times the video was shared
     * @param likesCount Number of likes on the video
     * @param commentCount Number of comments on the video
     * @param playCount Number of times the video has been played
     * @param cover a direct url to the video cover
     * @param dynamicCover a direct url to the dynamic video cover
     * @param playURL a direct play url for the video
     * @param downloadURL a direct download url for the video
     * @param format the format of the video
     */
    constructor(id: string, description: string, createdAt: string, height: number, width: number, duration: number, resolution: string, shareCount: number, likesCount: number, commentCount: number, playCount: number, downloadURL: string, cover?: string | undefined, dynamicCover?: string | undefined, playURL?: string | undefined, format?: string | undefined, author?: string | undefined, directVideoUrl?: string | undefined);
}

declare class Music implements IMusic {
    /**
     * tiktok music id
     */
    id: number;
    /**
     * tiktok music title
     */
    title: string;
    /**
     * direct link to the music
     */
    playURL: string;
    /**
     * tiktok music original cover
     */
    coverLarge: string;
    /**
     * tiktok music thumnail cover
     */
    coverThumb: string;
    /**
     * tiktok music author
     */
    author: string;
    /**
     * tiktok music duration
     */
    duration: number;
    /**
     * Whether the music is original or user made
     */
    original?: boolean;
    /**
     * The Album name if it is part of an album
     */
    album?: string;
    /**
     *
     * @param id tiktok music id
     * @param title tiktok music title
     * @param playURL direct link to the music
     * @param coverLarge tiktok music original cover
     * @param coverThumb tiktok music thumnail cover
     * @param author tiktok music author
     * @param duration tiktok music duration
     * @param original Whether the music is original or user made
     * @param album The Album name if it is part of an album
     */
    constructor(id: number, title: string, playURL: string, coverLarge: string, coverThumb: string, author: string, duration: number, original: boolean | undefined, album?: string | undefined);
}

declare class TTScraper {
    _cookiesJar: CookieJar;
    _cookies: string;
    constructor(cookiesPath?: string);
    /**
     * Fetches the website content and convert its content into text.
     * @param baseUrl baseUrl of the site to fetch
     * @param fetchOptions node-fetch fetch options. Optional
     * @returns Promise<cheerio.CheerioAPI>
    
    Example:
    ```ts
    const $ = await requestWebsite("https://www.amazon.de/s?k=" + "airpods")
    // => will return cheerio API Object to work with.
    
    $(".prices").each((_, value) => {
    console.log($(value).text().trim());
    });
    ```
     */
    private requestWebsite;
    /**
     * Extract the JSON Object from the DOM with JavaScript instead of cheerio
     * @param html string
     * @returns
     */
    private extractJSONObject;
    /**
     * Trys to parse the JSON Object extracted from the Page HTML
     * @param content HTML DOM Content
     * @returns
     */
    private checkJSONExisting;
    /**
     * Does Tiktok Requests with headless chrome
     * @param url
     * @returns
     */
    private requestWithPuppeteer;
    /**
     * Checker to use Node-fetch over puppteer in case cookies were not required since it happens randomly
     * @param link
     * @returns
     */
    private TryFetch;
    /**
     * Scrapes the tiktok video info from the given Link
     * @param uri tiktok video url
     * @returns Video
     */
    video(uri: string, noWaterMark?: boolean): Promise<Video | void>;
    /**
     * Scrapes the given user page and returns all available info
     * @param username tiktok username of a user
     * @returns User
     */
    user(username: string): Promise<User>;
    /**
     * Scrapes a user page and returns a list of all videos for this user
     * @param username tiktok username
     * @param noWaterMark whether the returned videos should be without watermark
     * @returns IVideo[]
     */
    getAllVideosFromUser(username: string, noWaterMark?: boolean): Promise<IVideo[]>;
    /**
     * Scrapes the given Link and returns information about the Music of the Video
     * @param link tiktok video url
     * @returns Music
     */
    getMusic(link: string): Promise<Music>;
    /**
     * Downloads all videos from a user page!
     * @param username tiktok username of the user
     * @param options download options
     */
    downloadAllVideosFromUser(username: string, options: {
        path?: string;
        watermark?: boolean;
    }): Promise<void>;
    /**
     * Returns direct download link for the video with no watermark!
     * @param link tiktok video url
     * @returns string
     */
    noWaterMark(link: string): Promise<string | undefined | void>;
    /**
     * Scrapes hashtag posts
     * @param tag tiktok hashtag
     * @returns Promise<IVideo[]>
     */
    hashTag(tag: string): Promise<IVideo[]>;
}

/**
 * Scrapes the tiktok video info from the given url
 * @param url tiktok video url
 * @param noWaterMark if video should be without watermark
 * @returns Video
 */
declare function fetchVideo(url: string, noWaterMark?: boolean): Promise<void | Video>;
/**
 * Scrapes the given user page and returns all available info
 * @param username tiktok username of a user
 * @returns User
 */
declare function fetchUser(username: string): Promise<User>;
/**
 * Scrapes a user page and returns a list of all videos for this user
 * @param username tiktok username of a user
 * @param noWaterMark if true, noWaterMark
 * @returns IVideo[]
 */
declare function fetchAllVideosFromUser(username: string, noWaterMark?: boolean): Promise<IVideo[]>;
/**
 * Scrapes the given Link and returns information about the Music of the Video
 * @param url tiktok video url
 * @returns Music
 */
declare function fetchMusic(url: string): Promise<Music>;
/**
 * Returns direct download link for the tiktok video with no watermark!
 * @param url tiktok video url
 * @returns
 */
declare function fetchVideoNoWaterMark(url: string): Promise<string | void | undefined>;
/**
 * Scrapes a hashtag posts
 * @param tag tiktok hashtag
 * @returns Promise<IVideo[]>
 */
declare function hashtag(tag: string): Promise<IVideo[]>;

export { IAuthor, IMusic, ITikTokResult, IUser, IVideo, Music, TTScraper, TikTokResult, User, Video, fetchAllVideosFromUser, fetchMusic, fetchUser, fetchVideo, fetchVideoNoWaterMark, hashtag };
