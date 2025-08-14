import React, { useRef, useState, useEffect } from 'react';

const TRACK_SRC = '/audio/beshtala-chanko-society.mp3';

type PlayState = 'loading' | 'playing' | 'paused' | 'error';

/**
 * RetroMusicPlayer
 *
 * Purpose:
 * - Provides background music for the site with retro/cyber styling
 * - Attempts autoplay on mount, falls back to manual control if blocked
 * - Displays play/pause button with cyber glow effects
 *
 * Key Features:
 * - Auto-play attempt with graceful fallback
 * - Cyber-styled controls matching site theme
 * - Loading states and error handling
 * - Accessibility support
 */
const RetroMusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playState, setPlayState] = useState<PlayState>('loading');

  // Attempt autoplay on mount
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedData = () => {
      // Try to autoplay when audio is loaded
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setPlayState('playing');
          })
          .catch((error) => {
            // Autoplay was prevented (likely due to browser policy)
            console.log('Autoplay prevented:', error);
            setPlayState('paused');
          });
      }
    };

    const handleError = () => {
      setPlayState('error');
    };

    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || playState === 'error' || playState === 'loading') return;

    if (playState === 'playing') {
      audio.pause();
      setPlayState('paused');
    } else if (playState === 'paused') {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setPlayState('playing');
          })
          .catch((error) => {
            console.error('Play failed:', error);
            setPlayState('paused');
          });
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      togglePlay();
    }
  };

  const getButtonText = () => {
    switch (playState) {
      case 'loading':
        return 'Loading...';
      case 'playing':
        return '⏸️ Pause';
      case 'paused':
        return '▶️ Play';
      case 'error':
        return '❌ Error';
      default:
        return '▶️ Play';
    }
  };

  const getAriaLabel = () => {
    return playState === 'playing' ? 'Pause background track' : 'Play background track';
  };

  if (playState === 'error') {
    return (
      <div className="music-bar">
        <span className="text-red-400 text-glow-pink text-sm">
          🎵 Audio unavailable
        </span>
      </div>
    );
  }

  const musicEmojis = ['🎵', '🎶', '🎤', '🎧', '🔊', '🎼', '🎹', '🥁', '🎸', '🎺'];
  
  return (
    <div className="music-bar">
      <audio 
        ref={audioRef}
        src={TRACK_SRC}
        loop
        preload="auto"
      />
      
      <div className="flex items-center justify-center gap-6 w-full">
        {/* Left side emojis */}
        <div className="flex items-center gap-2">
          {musicEmojis.slice(0, 5).map((emoji, index) => (
            <span 
              key={`left-${index}`}
              className={`text-lg transition-all duration-300 ${
                playState === 'playing' 
                  ? 'animate-bounce text-cyber-400' 
                  : 'text-cyber-300/40'
              }`}
              style={{
                animationDelay: playState === 'playing' ? `${index * 0.2}s` : '0s',
                animationDuration: '1.5s'
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
        
        {/* Center play/pause button */}
        <button
          className="btn-audio mx-4"
          onClick={togglePlay}
          onKeyDown={handleKeyDown}
          aria-label={getAriaLabel()}
          tabIndex={0}
          disabled={playState === 'loading'}
        >
          {playState === 'loading' && (
            <div className="animate-spin border-2 border-t-cyan-400 border-transparent w-4 h-4 rounded-full" />
          )}
          <span className="text-sm font-mono">
            {getButtonText()}
          </span>
        </button>
        
        {/* Right side emojis */}
        <div className="flex items-center gap-2">
          {musicEmojis.slice(5, 10).map((emoji, index) => (
            <span 
              key={`right-${index}`}
              className={`text-lg transition-all duration-300 ${
                playState === 'playing' 
                  ? 'animate-bounce text-cyber-400' 
                  : 'text-cyber-300/40'
              }`}
              style={{
                animationDelay: playState === 'playing' ? `${(index + 5) * 0.2}s` : '0s',
                animationDuration: '1.5s'
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RetroMusicPlayer;
