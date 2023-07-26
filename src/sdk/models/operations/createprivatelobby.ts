/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class CreatePrivateLobbyRequestBody extends SpeakeasyBase {
    /**
     * User input to initialize the game state. Object must be smaller than 64KB.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "initialConfig" })
    @Type(() => shared.LobbyInitialConfig)
    initialConfig: shared.LobbyInitialConfig;

    /**
     * Available regions to request a game server.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region: shared.Region;
}

export class CreatePrivateLobbyRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody: CreatePrivateLobbyRequestBody;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
    appId: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roomId" })
    roomId?: string;
}

export class CreatePrivateLobbyResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    createPrivateLobby400ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    createPrivateLobby401ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    createPrivateLobby404ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    createPrivateLobby422ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    createPrivateLobby429ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    createPrivateLobby500ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    lobby?: shared.Lobby;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
