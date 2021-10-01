import React from "react";
import { Text, View, Image } from "react-native";
import { Button, Card, IconButton, Paragraph, Title } from "react-native-paper";
import LeftContent from "../../components/Land/leftContent";
import { api } from "../../config/apis";
import mainStyle from "../../config/mainStyle";
import styles from "./style";


const CardToShowContent = ({ val,navigation }) => {
    const { title,
        author,
        dateAdded,
        brief,
        coverImage,
        totalReactions,
        responseCount,
        slug,
        cuid
    } = val;
    const date = Date(dateAdded).split(" ").splice(0, 4).join(" ");

    return (
        <Card
            elevation={2}
            mode={'elevated'}
            onPress={() => {
                navigation.navigate("webView",{
                    url: `${api.webViewUrl}${slug}-${cuid}`
                })
            }}
            style={styles.cardOuter}
        >
            <View style={styles.cardTitle}>
                {
                  author &&  author.photo
                        ?
                        <LeftContent
                            url={author.photo}
                            name={author.name}
                        />
                        :
                        <View>
                        </View>
                }

                <View style={styles.viewNameBinder}>
                    <Text
                    style={[
                        mainStyle.textMd,
                        {
                        fontWeight: 'bold'
                    }]}
                        accessibilityLabel={author.name}

                    >
                        {author.name}
                    </Text>
                    <Text
                    style={[
                        mainStyle.textsm,
                        mainStyle.secondaryColor
                    ]}
                    accessibilityLabel={`article published on ${date}`}>
                        {date}
                    </Text>
                </View>
            </View>
            <Card.Content>
                <Text style={[
                    mainStyle.textLg,
                   styles.textTitle
                ]}>
                    {title}
                </Text>
                <Text
                style={[
                    mainStyle.secondaryColor,
                    mainStyle.textsm
                ]}
                    numberOfLines={3}
                    ellipsizeMode={'tail'}
                >
                    {brief}
                </Text>
            </Card.Content>

            {
                coverImage !== "" && coverImage !== null ?
                    <Image
                        source={{ uri: coverImage }}
                        style={styles.img}
                        resizeMode={'contain'}

                    /> :
                    <></>
            } 
            <View style={styles.footer}>
                <View style={styles.iconsBinder}>
                    <IconButton
                        icon="comment-outline"
                    />
                    <Text style={styles.textWithIcon}>
                       {responseCount}
                    </Text>
                </View>
                <View style={styles.iconsBinder}>
                    <IconButton
                        icon="heart-outline"
                    />
                    <Text style={styles.textWithIcon}>
                        {totalReactions}
                    </Text>
                </View>
            </View>
        </Card>
    );
}
export default CardToShowContent;

