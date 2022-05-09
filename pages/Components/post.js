import { Card, Collapse, Text, Avatar } from "@nextui-org/react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

function Post(props) {
  return (
    <Card bordered shadow={false} css={{ mw: "600px", mb: "20px" }}>
      <div className={styles.titleWithAvatar}>
        <Link href={`/profiles/${props.user.id}`}>
          <Avatar
            text={props.user.username}
            color="gradient"
            textColor="white"
            css={{ mr: "10px", cursor: "pointer" }}
          />
        </Link>
        <Text h4>{props.post.title}</Text>
      </div>

      <Text blockquote>{props.post.body}</Text>
      <Collapse.Group>
        <Collapse
          title="Comments"
          subtitle={props.comments.length + "comments"}
        >
          {props.comments.map((comment) => (
            <Text key={comment.id} blockquote css={{ mb: "20px" }}>
              <Text h4>{comment.name}</Text>
              <Text>{comment.body}</Text>
              <Card.Footer>{comment.email}</Card.Footer>
            </Text>
          ))}
        </Collapse>
      </Collapse.Group>
    </Card>
  );
}

export default Post;
