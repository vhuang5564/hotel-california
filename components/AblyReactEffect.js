import Ably from "ably/promises";
import { useEffect } from 'react'

const ably = new Ably.Realtime.Promise({ authUrl: '/api/createTokenRequest' });


export function useChannel(channelName, callbackOnMessage) {
    const channel = ably.channels.get(channelName);

    const onMount = () => { //run each time our component is rendered. Inside onMount, we will subscribe to the specified channel,
        // triggering callbackOnMessage whenever a message is received.
        channel.subscribe(msg => { callbackOnMessage(msg); });
    }

    const onUnmount = () => { //unsubscribe from the channel, which will stop accidental multiples of connections, again saving our account limits.
        channel.unsubscribe();
    }

    const useEffectHook = () => { //that calls these functions correctly, returning onUnmount for React to use.
        onMount();
        return () => { onUnmount(); };
    };

    useEffect(useEffectHook);

    return [channel, ably];
}
